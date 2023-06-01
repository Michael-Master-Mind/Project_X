
<?php
require('connect.php');
$conn=new Connect;
    if(isset($_POST['send'])){
        $fname=$_POST['firstName'];
        $lname=$_POST['lastName'];
        $email=$_POST['email'];
        $pwd=$_POST['password'];
        $dob=$_POST['date'];
        $gender=$_POST['gender'];
        $connection=$conn->getConnection();
        $sql="CALL `insertUser`('$fname','$lname','$email','$pwd','$dob','$gender')";
        $result=$connection->query($sql);
        if(!$result){
            die('error'.mysqli_error($connection));
        }
        echo '
            <script>
            alert("'.$fname.' '.$lname.' has been successfully registered!!!");
            </script>
        ';
        include('plan.html');
    }
?>