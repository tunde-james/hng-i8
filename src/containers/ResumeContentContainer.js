import React from 'react'
import { ResumeContent } from '../components'
import {
  FaLinkedin,
  FaEnvelope,
  FaPhoneSquareAlt,
  FaGithubSquare,
} from 'react-icons/fa'

function ResumeContentContainer() {
  return (
    <ResumeContent>
      <ResumeContent.Container>
        <ResumeContent.Row>
          <ResumeContent.ColumnLeft>
            <ResumeContent.Contact>
              <ResumeContent.Icon>
                <FaLinkedin />
                <span>www.linkedin.com/in/tunde-james20</span>
              </ResumeContent.Icon>

              <ResumeContent.Icon>
                <FaEnvelope />
                <span>tundejames20@gmail.com</span>
              </ResumeContent.Icon>

              <ResumeContent.Icon>
                <FaPhoneSquareAlt />
                <span>+(234)8166248305</span>
              </ResumeContent.Icon>

              <ResumeContent.Icon>
                <FaGithubSquare />
                <span>www.github.com/tunde-james</span>
              </ResumeContent.Icon>
            </ResumeContent.Contact>

            <ResumeContent.Heading>Summary</ResumeContent.Heading>
            <ResumeContent.Summary>
              A tech enthusiast who believes in the infinite potential of
              computer software as a vehicle of technological advancement and
              societal change. Well versed and equipped with diverse Frontend
              development skillsets and having an all-round programming
              knowledge. A habitual learner who is constantly updated with the
              latest developments in the programming world, and keeps himself
              aware of the latest cutting edge tools and procedures available to
              a programmer. Able to effectively self-manage during independent
              projects, as well as collaborate as part of a productive team.
            </ResumeContent.Summary>
            <ResumeContent.Heading>Skills</ResumeContent.Heading>
            <ResumeContent.List>
              <ResumeContent.ListItem>HTML</ResumeContent.ListItem>
              <ResumeContent.ListItem>CSS</ResumeContent.ListItem>
              <ResumeContent.ListItem>JavaScript</ResumeContent.ListItem>
              <ResumeContent.ListItem>React JS</ResumeContent.ListItem>
              <ResumeContent.ListItem>Redux</ResumeContent.ListItem>
              <ResumeContent.ListItem>SASS</ResumeContent.ListItem>
              <ResumeContent.ListItem>Styled Components</ResumeContent.ListItem>
              <ResumeContent.ListItem>Rest APIs</ResumeContent.ListItem>
              <ResumeContent.ListItem>Git</ResumeContent.ListItem>
            </ResumeContent.List>
          </ResumeContent.ColumnLeft>

          <ResumeContent.ColumnRight>
            <ResumeContent.Col>
              <ResumeContent.Heading>Experience</ResumeContent.Heading>
              <ResumeContent.SubHeading>
                Junior Analyst
              </ResumeContent.SubHeading>
              <ResumeContent.SpanText>
                dipoleDIAMOND Ltd | 09/2019 – 03/2021
              </ResumeContent.SpanText>
              <ResumeContent.List>
                <ResumeContent.ListItem>
                  Automated business process using UiPath robots to automate an
                  internal banking process for two banks in Nigeria.
                </ResumeContent.ListItem>
                <ResumeContent.ListItem>
                  Created business design flows with ProcessMaker Business
                  Process Management (BPM) tool to design an employee goal
                  setting process and employee appraisal process.
                </ResumeContent.ListItem>
                <ResumeContent.ListItem>
                  Delivered in-depth intro to web development training,
                  imparting knowledge of best practices for building web
                  applications.
                </ResumeContent.ListItem>
                <ResumeContent.ListItem>
                  Helped to plan, coordinate and oversee UiPath Online training.
                </ResumeContent.ListItem>
                <ResumeContent.ListItem>
                  Developed flowcharts and diagrams to describe and lay out
                  logical operational steps.
                </ResumeContent.ListItem>
              </ResumeContent.List>
            </ResumeContent.Col>

            <ResumeContent.Col>
              <ResumeContent.SubHeading>Teacher</ResumeContent.SubHeading>
              <ResumeContent.SpanText>
                Maryam Memorial Private School | 09/2017 – 06/2018
              </ResumeContent.SpanText>
              <ResumeContent.List>
                <ResumeContent.ListItem>
                  Taught the students Physics and Computer at the high school
                  level.
                </ResumeContent.ListItem>
                <ResumeContent.ListItem>
                  Promoted physical, mental and social development using
                  classroom games and activities.
                </ResumeContent.ListItem>
                <ResumeContent.ListItem>
                  Encouraged creative thinking and motivated students by
                  addressing individual strengths and weaknesses based on
                  standardized testing results.
                </ResumeContent.ListItem>
              </ResumeContent.List>
            </ResumeContent.Col>

            <ResumeContent.Col>
              <ResumeContent.SubHeading>Intern</ResumeContent.SubHeading>
              <ResumeContent.SpanText>
                Institute of Public Analyst of Nigeria (IPAN) | 03/2015 –
                09/2015
              </ResumeContent.SpanText>
              <ResumeContent.List>
                <ResumeContent.ListItem>
                  Learnt the basic skills of web development, mainly HTML5 and
                  CSS3.
                </ResumeContent.ListItem>
                <ResumeContent.ListItem>
                  Wrote technical document for the IT department of the
                  institute.
                </ResumeContent.ListItem>
                <ResumeContent.ListItem>
                  Used the Ultraviolet-Visible Spectrophotometer to analyze a
                  drug.
                </ResumeContent.ListItem>
              </ResumeContent.List>
            </ResumeContent.Col>

            <ResumeContent.Heading>Education</ResumeContent.Heading>
            <ResumeContent.Col>
              <ResumeContent.SubHeading>
                Bachelor of Technology in Physics
              </ResumeContent.SubHeading>
              <ResumeContent.SpanText>
                Ondo State University of Science and Technology | 11/2011 –
                04/2017
              </ResumeContent.SpanText>
            </ResumeContent.Col>

            <ResumeContent.Heading>Projects</ResumeContent.Heading>
            <ResumeContent.Col>
              <ResumeContent.SubHeading>Netflix-clone</ResumeContent.SubHeading>
              <ResumeContent.List>
                <ResumeContent.ListItem>
                  React JS (Compound Component)
                </ResumeContent.ListItem>
                <ResumeContent.ListItem>
                  CSS-in-JS (Styled Component)
                </ResumeContent.ListItem>
                <ResumeContent.ListItem>
                  Firebase for database, sign-up, and login authentication
                </ResumeContent.ListItem>
                <ResumeContent.ListItem>
                  Fuse.js to implement live search
                </ResumeContent.ListItem>
              </ResumeContent.List>
            </ResumeContent.Col>

            <ResumeContent.Col>
              <ResumeContent.Heading>Hobbies</ResumeContent.Heading>
              <ResumeContent.List>
                <ResumeContent.ListItem>Football</ResumeContent.ListItem>
                <ResumeContent.ListItem>Music</ResumeContent.ListItem>
                <ResumeContent.ListItem>Video Games</ResumeContent.ListItem>
                <ResumeContent.ListItem>Travelling</ResumeContent.ListItem>
              </ResumeContent.List>
            </ResumeContent.Col>
          </ResumeContent.ColumnRight>
        </ResumeContent.Row>
      </ResumeContent.Container>
    </ResumeContent>
  )
}

export default ResumeContentContainer
