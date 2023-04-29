import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";

const Terms = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <h2>From terms.</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur,
          quibusdam numquam et debitis esse facilis, recusandae itaque omnis
          corporis enim ipsam vel? Fugit eum eaque provident commodi dolores
          totam inventore, aspernatur quae quidem aliquid earum, vel expedita a
          sit nobis nam nihil reiciendis aperiam voluptates porro, sint placeat
          dicta! Vitae doloremque at facilis quod, nesciunt, deleniti architecto
          sunt ratione nulla culpa perspiciatis corporis modi. Adipisci veniam
          pariatur aut nihil, nam nesciunt, consectetur fugiat illo repellendus
          voluptate iusto ipsa reprehenderit maxime similique? Iste optio
          dolorem voluptatibus ex rem at temporibus dolorum unde, libero sequi
          atque fugit ipsam. Iste consequatur sit eveniet eligendi vero placeat
          consequuntur fugiat debitis praesentium unde quam nisi quidem quae
          nihil aliquid voluptates, tempore corrupti temporibus fuga ratione
          maiores iure, corporis accusantium vel? Iusto a laudantium incidunt
          repudiandae at totam aut inventore obcaecati culpa, explicabo tempore
          eum debitis. Porro dicta exercitationem itaque nesciunt est ut
          necessitatibus commodi hic tempore, nulla error fuga maiores quisquam
          ratione labore, dolores sequi adipisci neque aperiam. Voluptatibus
          minima nostrum nobis ducimus et debitis excepturi, assumenda facere
          accusamus aliquid qui saepe? Rerum enim aliquam, iusto quis quae
          ratione laborum nobis assumenda est, architecto tenetur minus quam
          obcaecati fugit! Ipsum accusantium quia voluptates veniam libero!
        </p>
        <Button variant="primary" onClick={() => navigate(-1)}>
          Back
        </Button>
      </Container>
    </>
  );
};

export default Terms;
