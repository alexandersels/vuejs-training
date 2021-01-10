<template>
  <div class="container">
    <PageTitle title="Units Overview"></PageTitle>
    <div class="operations">
      <button class="add" @click="onCreateClicked()">
        <font-awesome-icon icon="plus-square"/>
        Create
      </button>
    </div>
    <div class="table-wrapper">
      <table>
        <thead>
        <tr>
          <th v-for="colName in columns"
              :key="colName"
              :class="{active: sortKey === colName}"
              @click="headerClicked(colName)">
            <span>{{ colName }}</span>
            <span class="arrow" :class="sortKey === colName && sortOrder ? 'asc' : 'dsc'"></span>
          </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="entry in units" :key="entry.id" @click="onRowSelected(entry.id)">
          <td>{{ entry.name }}</td>
          <td>{{ entry.productNumber }}</td>
          <td>{{ entry.type }}</td>
          <td>{{ entry.line }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import PageTitle from "@/components/Shared/PageTitle";
import * as axios from "axios";

export default {
  name: 'Units',
  components: {PageTitle},
  data() {
    return {
      sortKey: '',
      sortOrder: false, // false == desc
      columns: ['Name', 'Product Number', 'Type', 'Line'],
      units: [],
    }
  },
  methods: {
    headerClicked(columnName) {
      if (this.sortKey !== columnName) {
        this.sortKey = columnName;
        this.sortOrder = true;
      } else {
        this.sortOrder = !this.sortOrder;
      }
      this.sortData();
    },
    sortData() {
      this.units = this.units.slice().sort((a, b) => {
        a = this.findSortValue(a);
        b = this.findSortValue(b);

        let order = (a === b ? 0 : a > b ? 1 : -1);
        if (this.sortOrder) {
          return order;
        } else {
          return order * -1;
        }
      })
    },
    findSortValue(unit) {
      switch (this.sortKey) {
        case "Name":
          return unit.name;
        case "Product Number":
          return unit.productNumber;
        case "Type":
          return unit.type;
        case "Line":
          return unit.line;
        default:
          return "";
      }
    },
    onRowSelected(id) {
      this.$router.push(`/units/${id}`);
    },
    onCreateClicked() {
      this.$router.push('/units/create');
    }
  },
  mounted() {
    axios
        .get('https://localhost:5002/api/units')
        .then(response => this.units = response.data)
        .catch(() => {
          this.units = [
            {
              id: '1',
              name: 'Unit One',
              productNumber: '123ABC',
              type: 'Type One',
              line: 'Line One',
            },
            {
              id: '2',
              name: 'Unit Two',
              productNumber: '456DEF',
              type: 'Type Two',
              line: 'Line Two',
            },
            {
              id: '3',
              name: 'Unit Three',
              productNumber: '789GHI',
              type: 'Type Three',
              line: 'Line Three',
            }
          ]
        })
  }
}
</script>

<style scoped>
.container {
  margin-top: 10rem;
}

.table-wrapper {
  display: flex;
  width: 100%;
  justify-content: center;
}

p {
  color: rgb(76, 77, 77);
  font-size: 16px;
}

table {
  width: 100%;
  font-size: 16px;
  background-color: #fff;
}

th {
  background-color: #007bff;
  color: rgba(255, 255, 255, 0.9);
  cursor: pointer;
  user-select: none;
}

td {
  background-color: #f9f9f9;
}

th,
td {
  min-width: 120px;
  padding: 10px 20px;
}

tr {
  cursor: pointer;
}

th.active .arrow {
  opacity: 1;
}

.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.66;
}

.arrow.asc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #fff;
}

.arrow.dsc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #fff;
}

.operations {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding-top: 5rem;
  margin-bottom: 1rem;
}

.add {
  padding: .5rem 2rem;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.9);
  background-color: #007bff;
  border: 2px solid #03478C;
  cursor: pointer;
  border-radius: 10px;
}
</style>
