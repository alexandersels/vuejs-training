<template>
  <div class="container">
    <PageTitle title="Users Overview"></PageTitle>
    <div class="operations">
      <button class="add" @click="onCreateClicked()">
        <font-awesome-icon icon="plus-square"/>
        Register
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
        <tr v-for="entry in users" :key="entry.id" @click="onRowSelected(entry.id)">
          <td>{{ entry.personalNumber }}</td>
          <td>{{ entry.lastName }}</td>
          <td>{{ entry.firstName }}</td>
          <td>{{ entry.line }}</td>
          <td>{{ entry.role }}</td>
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
  name: 'Users',
  components: {PageTitle},
  data() {
    return {
      sortKey: '',
      sortOrder: false, // false == desc
      columns: ['Personal Number', 'Lastname', 'Firstname', 'Line', 'Role'],
      users: [],
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
      this.users = this.users.slice().sort((a, b) => {
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
    findSortValue(user) {
      switch (this.sortKey) {
        case "Firstname":
          return user.firstName;
        case "Lastname":
          return user.lastName;
        case "Personal Number":
          return user.personalNumber;
        case "Line":
          return user.line;
        case "Role":
          return user.role;
        default:
          return "";
      }
    },
    onRowSelected(id) {
      this.$router.push(`/users/${id}`);
    },
    onCreateClicked() {
      this.$router.push('/register');
    }
  },
  mounted() {
    axios
        .get('https://localhost:5001/api/users')
        .then(response => this.users = response.data);
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
