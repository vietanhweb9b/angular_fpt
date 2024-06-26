window.AddProductController=function($scope,$http,$location){
    const apiUrl="http://localhost:3000/product"
    const apiCate="http://localhost:3000/category"

    $scope.getAllCategory = function(){
        $http.get(`${apiCate}`).then(res=>{
            if(res.status==200){
                $scope.categories=res.data
            }
        }).catch(error=>{
            $scope.message=`${error.statusText} product with id ${id}`
        })
    }
    $scope.getAllCategory()
    // kiểm tra dữ liệu xem có hợp lệ không
    $scope.checkData={
        name:false,
        price:false,
        title:false,
        cate:false,
        desc:false
    }
    $scope.onSubmit=function(){
        let flag=false
        if(!$scope.inputValue.name || !$scope.inputValue){
            $scope.checkData.name=true
            flag=true
        }

        if(!$scope.inputValue.price || !$scope.inputValue){
            $scope.checkData.price=true
            flag=true
        }

        if(!$scope.inputValue.title || !$scope.inputValue){
            $scope.checkData.title=true
            flag=true
        }
        if(!$scope.inputValue.desc || !$scope.inputValue){
            $scope.checkData.desc=true
            flag=true
        }

        if(!$scope.inputValue.cate || !$scope.inputValue){
            $scope.checkData.cate=true
            flag=true
        }

        if(!flag){
            // tạo ra 1 đối tượng item để thêm vào dữ liệu
            var newItem={
                ...$scope.inputValue
            }
            console.log(newItem);
            // khi thêm dữ liệu sử dụng phương thức post
            $http.post(apiUrl,newItem).then(res=>{
                if(res.status==201){
                    console.log(newItem);
                    $location.path('/product/list')
                }
            })
        }
    }
}