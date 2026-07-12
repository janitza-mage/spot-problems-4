import {WithHeader} from "../technical-components/layout/WithHeader.tsx";

export function AboutPage() {
  return <WithHeader
      header={<>
        <h1 style={{margin: 0}}>About</h1>
      </>}
  >
    bla bla
  </WithHeader>;
}
