<template>
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
            <tr v-for="stu in stuList" v-bind:key="stu.id">
                <td>
                    {{stu.id}}
                </td>
                <td v-text="stu.name">

                </td>
                <td>
                    <input type="text" v-model="stu.num">
                    {{stu.num}}
                </td>
            </tr>
        </tbody>
        <tfoot>
        </tfoot>
    </table>
</template>

<script>
export default {
    name: "List",
    data() {
        return {
            stuList: [
                {
                    id: 1,
                    name: "张三",
                    num: 123
                },
                {
                    id: 2,
                    name: "李四",
                    num: 456
                }
            ]
        };
    }
};
</script>

