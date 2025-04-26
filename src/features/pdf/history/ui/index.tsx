import { useQuery } from "@tanstack/react-query";
import { getHistory } from "../api/get-history";
import { Button, Card, Col, Layout, Row } from "antd";
export const History = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["history"],
    queryFn: getHistory,
  });
  return (
    <Layout className="p-4">
      <Row gutter={[16, 16]}>
        {!isLoading &&
          data?.length &&
          data.map((item) => (
            <Col key={item.id} xs={24} sm={12} md={8}>
              <Card title={item.title}>
                <p>
                  <strong>Created:</strong>{" "}
                  {new Date(item.created_at).toLocaleString()}
                </p>
                <Button
                  type="primary"
                  className="mt-2"
                  href={item.upload_url}
                  target="_blank"
                  download
                >
                  Download Summary
                </Button>
              </Card>
            </Col>
          ))}
      </Row>
    </Layout>
  );
};
