import { Container, Row, Col, Card, CardGroup } from "react-bootstrap";
import { Chart } from "react-google-charts";

// Line Chart Data //
const data = [
  ["Year", "usage", "collection"],
  ["Jan", 1000, 400],
  ["Feb", 1170, 460],
  ["Mar", 660, 1120],
  ["May", 1030, 540],
  ["Jun", 1030, 540],
  ["Jul", 1030, 540],
  ["Aug", 660, 1540],
  ["Sep", 1030, 540],
  ["Oct", 1030, 540],
  ["Nov", 1030, 540],
  ["Dec", 1030, 540],
];

const options = {
  title: "Year Wise Usage/Collection",
  curveType: "function",
  legend: { position: "bottom" },
};
// Line Chart Data Ends //

// Bar Chart Data //
const bar_data = [
  ["year", "usage", "collection", "due"],
  ["2020", 1170, 460 , 600],
  ["2021", 660, 1120 , 600],
  ["2022", 1030, 540 , 600],
];

const bar_options = {
  chart: {
    title: "Yearly Performance",
    subtitle: "Usage, Collection, and Dues",
  },
};

// Bar Chart Option Ends //


const AdminPage = () => {
    return (
    <>
      <div className="mt-4" style={{margin:"1rem"}}>
        <Row>
          <Col>
            <CardGroup>
              <Card bg="success" text="white" style={{marginRight:"5px"}} className="shadow">
                <Card.Body className="text-center">
                  <Card.Title>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-people" viewBox="0 0 16 16">
                      <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
                    </svg> <span>USERS</span>
                  </Card.Title>
                  <Card.Text>5000</Card.Text>
                </Card.Body>
              </Card>
              
              <Card bg="secondary" text="white" style={{marginRight:"5px"}} className="shadow">
                <Card.Body className="text-center">
                  <Card.Title>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-people" viewBox="0 0 16 16">
                      <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
                    </svg> <span>POSTPAID</span>
                  </Card.Title>
                  <Card.Text>3400</Card.Text>
                </Card.Body>
              </Card>


              <Card bg="dark" text="white" style={{marginRight:"5px"}} className="shadow">
                <Card.Body className="text-center">
                  <Card.Title>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-layer-forward" viewBox="0 0 16 16">
                      <path d="M8.354.146a.5.5 0 0 0-.708 0l-3 3a.5.5 0 0 0 0 .708l1 1a.5.5 0 0 0 .708 0L7 4.207V12H1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H9V4.207l.646.647a.5.5 0 0 0 .708 0l1-1a.5.5 0 0 0 0-.708l-3-3z"/>
                      <path d="M1 7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h4.5a.5.5 0 0 0 0-1H1V8h4.5a.5.5 0 0 0 0-1H1zm9.5 0a.5.5 0 0 0 0 1H15v2h-4.5a.5.5 0 0 0 0 1H15a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-4.5z"/>
                    </svg> <span>USAGE</span>
                  </Card.Title>
                  <Card.Text>55555000</Card.Text>
                </Card.Body>
              </Card>

              
              <Card bg="light" text="dark" style={{marginRight:"5px"}} className="shadow">
                <Card.Body className="text-center">
                  <Card.Title>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-layer-backward" viewBox="0 0 16 16">
                      <path d="M8.354 15.854a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708l1-1a.5.5 0 0 1 .708 0l.646.647V4H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9v7.793l.646-.647a.5.5 0 0 1 .708 0l1 1a.5.5 0 0 1 0 .708l-3 3z"/>
                      <path d="M1 9a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4.5a.5.5 0 0 1 0 1H1v2h4.5a.5.5 0 0 1 0 1H1zm9.5 0a.5.5 0 0 1 0-1H15V6h-4.5a.5.5 0 0 1 0-1H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4.5z"/>
                    </svg> <span>Collection</span>
                  </Card.Title>
                  <Card.Text>5788000</Card.Text>
                </Card.Body>
              </Card>

              
              <Card bg="danger" text="white" style={{marginRight:"5px"}} className="shadow">
                <Card.Body className="text-center">
                  <Card.Title>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus-slash-minus" viewBox="0 0 16 16">
                      <path d="m1.854 14.854 13-13a.5.5 0 0 0-.708-.708l-13 13a.5.5 0 0 0 .708.708ZM4 1a.5.5 0 0 1 .5.5v2h2a.5.5 0 0 1 0 1h-2v2a.5.5 0 0 1-1 0v-2h-2a.5.5 0 0 1 0-1h2v-2A.5.5 0 0 1 4 1Zm5 11a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5A.5.5 0 0 1 9 12Z"/>
                    </svg> <span>DUES</span>
                  </Card.Title>
                  <Card.Text>50759500</Card.Text>
                </Card.Body>
              </Card>



            </CardGroup>
          </Col>
        </Row>
      </div>
      <div>
        <Container className="shadow mb-5">
          <Chart
            chartType="LineChart"
            width="100%"
            height="400px"
            data={data}
            options={options}
          />
        </Container>
        <Container className="shadow mb-5">
          <Chart
            chartType="Bar"
            width="100%"
            height="400px"
            data={bar_data}
            options={bar_options}
          />
        </Container>
      </div>
    </>
      );
  };
  
  export default AdminPage;
