<template>
  <div class="container">
    <PageTitle title="Sheets Overview"></PageTitle>
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
        <tr v-for="entry in sheets" :key="entry.id" @click="onRowSelected(entry.id)">
          <td>{{ entry.partNumber }}</td>
          <td>{{ entry.name }}</td>
          <td>{{ entry.maxStock }}</td>
          <td>{{ entry.currentStock }}</td>
          <td>{{ entry.location }}</td>
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
  name: 'Sheets',
  components: {PageTitle},
  data() {
    return {
      sortKey: '',
      sortOrder: false, // false == desc
      columns: ['Part Number', 'Name', 'Max Stock', 'Current Stock', 'Location'],
      sheets: [],
      axios: null,
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
      this.sheets = this.sheets.slice().sort((a, b) => {
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
    findSortValue(sheet) {
      switch (this.sortKey) {
        case "Name":
          return sheet.name;
        case "Part Number":
          return sheet.partNumber;
        case "Max Stock":
          return sheet.maxStock;
        case "Current Stock":
          return sheet.currentStock;
        case "Location":
          return sheet.location;
        default:
          return "";
      }
    },
    onRowSelected(id) {
      this.$router.push(`/sheets/${id}`);
    },
    onCreateClicked() {
      this.$router.push('/sheets/create');
    }
  },
  mounted() {
    axios
        .get('https://localhost:5002/api/sheets')
        .then(response => this.sheets = response.data)
        .catch(() => {
          this.sheets = [
            {
              id: '1',
              partNumber: '132',
              name: 'Part One',
              maxStock: 10,
              currentStock: 5,
              location: 'Hanger One',
            },
            {
              id: '2',
              partNumber: '4561',
              name: 'Part Two',
              maxStock: 20,
              currentStock: 4,
              location: 'Hanger Two',
            }
          ];
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
