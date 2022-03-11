<template>
    <div class="table-responsive">
        <table class="table">
            <thead>
                <tr>
                    <th>Info</th>
                    <th>Data</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Name</th>
                    <td>{{accountData.name}}</td>
                    <td><button class="btn btn-warning">Change</button></td>
                </tr>
                <tr>
                    <th>Surname</th>
                    <td>{{accountData.surname}}</td>
                    <td><button class="btn btn-warning">Change</button></td>
                </tr>
                <tr>
                    <th>Age</th>
                    <td>{{accountData.age}}</td>
                    <td><button class="btn btn-warning">Change</button></td>
                </tr>
                <tr>
                    <th>Weight</th>
                    <td>{{accountData.weight}}</td>
                    <td><button class="btn btn-warning">Change</button></td>
                </tr>
                <tr>
                    <th>Username</th>
                    <td>{{accountData.username}}</td>
                    <td><button class="btn btn-warning">Change</button></td>
                </tr>
                <tr>
                    <th>Password</th>
                    <td>{{accountData.password.length > 0 ? '**********' : ''}}</td>
                    <td><button class="btn btn-warning">Change</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { getWithExpiry } from '../../utils/localstorage/localstorage'
export default {
    data() {
        return {
            accountData: getWithExpiry('registerData') != null ? getWithExpiry('registerData') : null
        }
    }
}
</script>