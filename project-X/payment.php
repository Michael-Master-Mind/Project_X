<?php
require('connect.php');
$conn=new Connect;
    if(isset($_POST['send'])){
        $fname=$_POST['fullName'];
        $email=$_POST['email'];
        $cardNumber=$_POST['cardNumber'];
        $exDate=$_POST['date'];
        $cardType=$_POST['card'];
        $chosenPlan=$_POST['chosenPlan'];
        $connection=$conn->getConnection();
        $sql="CALL `insertPayment`('$fname','$email','$cardNumber','$exDate','$cardType','$chosenPlan')";
        $result=$connection->query($sql);
        if(!$result){
            die('error'.mysqli_error($connection));
        }
        echo '
            <script>
            alert(" Payment has been successfully completed!!!");
            </script>
        ';
        include('login.html');
    }
?>