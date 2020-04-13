
var age = 10
var age2 = 20

console.log(age, age2)

function plus ( a, b )

{
    return a+b
}

function login(id, pw)
{
    if( id==="coffee" && pw==="tea")
        return true
    else
        return false
}    

function clickEvent()
{
    var idText = document.getElementById("id-text")
    var pwText = document.getElementById("pw-text")
    // console.log( idText.value, pwText.value)
    if(login(idText.value, pwText.value))
    {
        alert("로그인 성공")
    }
    else{
        alert("아이디나 비밀번호가 잘못 되었습니다.")
    }
    // alert( "주의하세요!")
}

// var arr = document.getElementsByClassName("navbar")
// console.log(arr[0].value)
