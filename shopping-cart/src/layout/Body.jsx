import Card from "../component/Card"
const fruits =[
    {
        id: 1,
        price: 10,
        name: "apple",
        description: "fresh apple from myanmar",
    },
    {
        id: 2,
        price: 20,
        name:"orange",
        description: "fresh orange from myanmar",
    },
    {
        id: 3,
        price: 15,
        name:"banana",
        description: "fresh banana from myanmar",
    },
    {
        id: 4,
        price: 50,
        name:"watermelon",
        description: "fresh watermelon from myanmar",
    },
    {
        id: 5,
        price: 25,
        name:"peach",
        description: "fresh peach from myanmar",
    }
];
const Body = () => {
  return (
   <section>
    {
        fruits.map( fruit => (
            <Card key={fruit.id} fruit={fruit}/>
        ) 

        )
    }
    
   </section>
  )
}

export default Body