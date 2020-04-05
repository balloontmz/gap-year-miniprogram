declare namespace ApiRequest {
    interface Request {
        taskList(params: any): Promise<any>
        userTaskList(params: any): Promise<any>
        wxLogin(params: any): Promise<any>
        updateProcess(params: any): Promise<any>
        createUserTask(params: any): Promise<any>
        quickComplete(params: any): Promise<any>
    }
}