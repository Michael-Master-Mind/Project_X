
<?php
require('connect.php');
$conn=new Connect;
    if(isset($_POST['delete'])){
        $fname=$_POST['firstName'];
        $lname=$_POST['lastName'];
        $email=$_POST['email'];
        $pwd=$_POST['password'];
        $dob=$_POST['date'];
        $connection=$conn->getConnection();
        $sql=$sql="delete from userinfo where Email='$email'";
        $result=$connection->query($sql);
        if(!$result){
            die('error'.mysqli_error($connection));
        }
        echo '
            <script>
            alert("'.$fname.' '.$lname.', your account has been succesfully Deleted!!!");
            </script>
        ';
        include('login.html');
    }

    if(isset($_POST['update'])){
        $fname=$_POST['firstName'];
        $lname=$_POST['lastName'];
        $email=$_POST['email'];
        $oldpwd=$_POST['password'];
        $pwd=$_POST['Confirm'];
        $dob=$_POST['date'];
        $connection=$conn->getConnection();
        $sql="CALL `updateUser`('$fname','$lname','$email','$pwd','$dob','$oldpwd')";
        $result=$connection->query($sql);
        if(!$result){
            die('error'.mysqli_error($connection));
        }
        echo '
            <script>
            alert("'.$fname.' '.$lname.', your account has been succesfully Updated!!!");
            </script>
        ';
        include('login.html');
    }
?>