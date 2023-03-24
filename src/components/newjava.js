class Array{
    constructor(){

    }

    // , class has no ',' between methods

    filter(callbackfnc){
        const filteredarray= []
       // access of whole array because todos.filter
        for(let i=0;i<arr.length();i++)
        {
            // arr[i]=arr[i]+2
            if(callbackfnc(arr[i],i,arr)){
                filteredarray.push(arr[i])
            }
        }
        return filteredarray
    }


}
this.todos.filter()
