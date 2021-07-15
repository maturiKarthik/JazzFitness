import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Home from "../components/home"

const IndexPage = () => (
  <Layout>
    <Seo title="JazzFitness" />
    <Home></Home>
  </Layout>
)

export default IndexPage
