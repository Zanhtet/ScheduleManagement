const dbUtli = require('../utilities/dbUtli');
var dbUtli = require("../utilities/dbUtli");

module.exprots = {

	getRoles: async (roleId) => {
		let sql = "SELECT * FROM role";
		return await dbUtli.executeSql(sql, []).then(fields => {
			return fields;
		});
	},
	setRoles: async (role) => {
		let sql = "INSERT INTO role(roleId, name, viewReport, createJob, assignJob)" +
			"Value(?,?,?,?,?)";
		let param = [role.roleId, role.name, role.viewReport, role.createJob, role.assignJob];
		return await dbUtli.executeSql(sql, param).then(fields => {
			return true;
		});
	},
	getRole: async (role) => {
		let sql = "SELECT * FROM role WHERE roleId = roleId";
		let param = [roleId];
		return await dbUtli.executeSql(sql, param).then(fields => {
			return fields;
		});
	},
	updateRole: async (role) => {
		let sql = "UPDATE role SET roleName = ?, canViewReport = ? , canCreateEmployee = ?, canCreateJob = ? , canAssginJob =? " +
			"WHERE roleId = ?)"

		let param = [role.roleName, role.canViewReport, role.canCreateEmployee, role.canAssginJob, role.roleId];

		return await dbUtli.executeSql(sql, param).then(fields => {
			return true;
		});
	},
	deleteRole: async (roleId) => {
		let sql = "DELETE FROM roleId =?"
		let param = [roleId];
		return await dbUtli.executeSql(sql, param).then(fields => {
			return fields;
		});
	}
}