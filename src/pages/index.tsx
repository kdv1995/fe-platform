import { Card, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
const { Title, Paragraph } = Typography;
export function IndexPage() {
  return (
    <section>
      <Content className="flex flex-col items-center mt-4">
        <Card className="max-w-max w-full">
          <Typography>
            <Title>Welcome to PDF Summarizer</Title>
            <Paragraph>
              PDF Summarizer allows you to upload your PDF documents and receive
              a concise summarized version. Simply upload your file, and our
              powerful language model (LLM) will process your document,
              extracting the key information and returning a clear and short
              summary for you.
            </Paragraph>
          </Typography>
        </Card>
      </Content>
    </section>
  );
}
