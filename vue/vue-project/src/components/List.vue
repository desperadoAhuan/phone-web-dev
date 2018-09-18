<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>
                        序号
                    </th>
                    <th>
                        名字
                    </th>
                    <th>
                        电话
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="stu in stuList" v-bind:key="stu.id" v-on:click="editInfo(stu.id)">
                    <td>
                        {{stu.id}}
                    </td>
                    <td v-text="stu.name">

                    </td>
                    <td>
                        <input type="text" v-model="stu.phoneNumber">
                    </td>
                </tr>
            </tbody>
            <tfoot>
            </tfoot>
        </table>
        <add-info @addInfo="addList">
        </add-info>
    </div>

</template>

<script>
import AddInfo from "./AddInfo";

export default {
    name: "List",
    data() {
        return {
            stuList: [
                {
                    id: 1,
                    name: "张三",
                    phoneNumber: 123
                },
                {
                    id: 2,
                    name: "李四",
                    phoneNumber: 456
                }
            ]
        };
    },
    components: {
        AddInfo
    },
    methods: {
        addList: function(data) {
            console.log(data);
            this.stuList.push(data);
        },
        editInfo: function(str, e) {
            console.log(str);
            console.log(e);
        }
    }
};
</script>

