import { Link } from "react-router-dom";

const IndexContainer = () => {
  return (
    <>
      <nav style={{ display: "flex", justifyContent: "space-around" }}>
        <Link to="/pokemon">Pokemon</Link>
        <Link to="/organizations">Organizations</Link>
        <Link to="/super-user">Super User</Link>
      </nav>

      <h1>IndexContainer</h1>

      <section>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          ultricies mauris rhoncus dapibus faucibus. Sed placerat dolor lorem,
          ac ultrices sem dapibus quis. Interdum et malesuada fames ac ante
          ipsum primis in faucibus. Nulla pretium, lorem id aliquet dapibus,
          lectus nibh condimentum felis, ac aliquam erat magna finibus mauris.
          Aenean lobortis semper risus, fringilla vehicula elit dignissim et.
          Proin faucibus, magna auctor mollis ornare, lectus arcu scelerisque
          ipsum, sed ullamcorper ligula mauris vel lacus. In ullamcorper quis
          enim at egestas. Proin mattis quam sit amet nulla ornare, eget aliquet
          massa venenatis. Phasellus at bibendum tellus, ac suscipit magna.
          Pellentesque placerat purus nulla, egestas pellentesque lectus
          dignissim vel. Duis blandit rutrum aliquet. Phasellus imperdiet dolor
          lorem, in posuere massa blandit id. Proin elit lacus, rhoncus quis
          tellus sit amet, condimentum aliquet ante. Maecenas non neque lectus.
          In in tincidunt felis, sed luctus eros.
        </p>
        <p>
          Nulla sed magna eget nulla porta dignissim ac et nulla. Nam iaculis et
          nunc id semper. Phasellus hendrerit, enim ut sodales maximus, sem
          velit consequat urna, et sollicitudin quam dolor ac ex. Praesent
          mattis rhoncus leo, et dictum mi aliquet ac. Morbi mollis augue eu
          orci vestibulum, non auctor nunc aliquam. Aliquam sollicitudin metus
          quis tellus efficitur rhoncus. Nunc faucibus id augue ac auctor.
          Suspendisse tristique in lectus nec elementum. Integer quis nibh diam.
          Proin urna purus, consectetur sed nunc sed, gravida convallis est.
          Fusce imperdiet, massa pellentesque vehicula egestas, mauris leo
          lobortis tortor, in consequat orci lorem vitae purus. Morbi vel
          euismod leo, non convallis orci. Mauris vehicula mi eu lectus
          fermentum, nec finibus purus accumsan.
        </p>
      </section>
    </>
  );
};

export default IndexContainer;
