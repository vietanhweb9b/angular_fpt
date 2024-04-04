window.AddProductController=function($scope,$http,$location){
    const apiUrl="http://localhost:3000/product"

    // kiểm tra dữ liệu xem có hợp lệ không
    $scope.checkData={
        name:false,
        price:false,
        title:false,
        desc:false
    }
    $scope.onSubmit=function(){
        // gán 1 biến để kiểm tra lỗi
        //  nếu 1 trong 2 lỗi thì chuyển thành true
        let flag=false
        if(!$scope.inputValue.name || !$scope.inputValue){
            // nếu không nhập vào inputValue hoặc inputValue.name 
            //thì lập tức chuyển thành true
            $scope.checkData.name=true
            flag=true
        }

        if(!$scope.inputValue.price || !$scope.inputValue){
            // nếu không nhập vào inputValue hoặc inputValue.price 
            //thì lập tức chuyển thành true
            $scope.checkData.price=true
            flag=true
        }

        if(!$scope.inputValue.title || !$scope.inputValue){
            // nếu không nhập vào inputValue hoặc inputValue.price 
            //thì lập tức chuyển thành true
            $scope.checkData.title=true
            flag=true
        }
        if(!$scope.inputValue.desc || !$scope.inputValue){
            // nếu không nhập vào inputValue hoặc inputValue.price 
            //thì lập tức chuyển thành true
            $scope.checkData.desc=true
            flag=true
        }

        if(!flag){
            // tạo ra 1 đối tượng item để thêm vào dữ liệu
            var newItem={
                ...$scope.inputValue
            }
            // khi thêm dữ liệu sử dụng phương thức post
            $http.post(apiUrl,newItem).then(res=>{
                if(res.status==201){
        console.log(1);
                    $location.path('/product/list')
                }
            })
        }
    }
}