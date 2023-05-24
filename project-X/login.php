<?php 
    require('connect.php');
    $conn=new Connect;
    if(isset($_POST['send'])){
        $email=$_POST['email'];
        $password=$_POST['password'];
        $connection=$conn->getConnection();
        $sql="SELECT * FROM userinfo WHERE Email='$email' AND Password='$password'";
        $result=$connection->query($sql);
        if($result->num_rows >0){
                $row=$result->fetch_assoc();
                $fname=$row['FirstName'];
                $lname=$row['LastName'];
                echo'
                    <script>
                        alert("'.$fname.' '.$lname.' Welcome!!!");
                    </script>
                ';
        }
        else{
            echo'
                <script>
                    alert("This account does not exist!!!");
                </script>
            '; 
            include('login.html');
        }
    }
?>