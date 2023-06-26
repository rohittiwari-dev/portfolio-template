function search() {
    let cards=document.querySelectorAll(".project-cards");
    let s_value = document.getElementById("search");
    let m_value =document.querySelectorAll(".title3")
    if(s_value.value!=="")
    {
        cards.forEach(Element =>{
            Element.style.display="none";
        } );
        for(let i=0;i<m_value.length;i++)
        {
            if(m_value[i].innerText.toLowerCase().includes(s_value.value.toLowerCase())) {
                cards[i].style.display="grid";
            }
        }
    }
    else
    {
            cards.forEach(Element =>{
                Element.style.display="grid";
            } );
    }
}