const passwordBox=document.getElementById("password");
        const length=8;
        const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowercase="abcdefghijklmnopqrstuvwxyz";
        const number="0123456789";
        const specialcharacters="!@#$%^&*()_+/*?><[]{}";
        const allchars=uppercase+lowercase+number+specialcharacters;
        function createPassword(){
            let password="";
            password += uppercase[Math.floor(Math.random()*uppercase.length)];
            password += lowercase[Math.floor(Math.random()*lowercase.length)];
            password += number[Math.floor(Math.random()*number.length)];
            password += specialcharacters[Math.floor(Math.random()*specialcharacters.length)];

        
        while(length>password.length){
            password+=allchars[Math.floor(Math.random()* allchars.length)];
        }
        passwordBox.value=password;
    }
    function copypassword(){
        passwordBox.select();
        document.execCommand("copy");
    }
     
