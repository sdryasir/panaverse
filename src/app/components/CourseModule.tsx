"use client"
import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    Box,
    useBreakpointValue,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Container,
    Center,
    List,
    ListItem,
    ListIcon
  } from '@chakra-ui/react';
  import { BsFillArrowRightCircleFill } from "react-icons/bs";
  
  export default function CourseModule() {
    return (
      <Box bg='gray.100' py={12} fontSize={{ base: 'sm', sm: 'lg', md: 'xl' }}>
        <Container maxW='1280px'>
        
        <Stack direction={{ base: 'column', md: 'row' }}>
          
        <Flex flex={1}>
        
          <Stack spacing={6} w={'full'} pr={6}>
          <Stack as={Box}  >
          <Heading
            fontWeight={600}
            fontSize={{ base: 'xl', sm: '2xl', md: '4xl' }}>
            <Text as={'span'} color={'green.400'}>
            Detailed Course Syllabus
            </Text>
          </Heading>
          <Text color={'gray.500'}>
          The graduates of this program will own products (Full-Stack App Templates, AR and VR Experiences, and APIs) that are marketed globally by the Panaverse DAO
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
          </Stack>
        </Stack>

            <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                      Quater I (Core)
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <List spacing={3}>
                    <ListItem>
                      <ListIcon as={BsFillArrowRightCircleFill} color='green.500' />
                      HTML, CSS & Web 3.0 and Metaverse Theory
                    </ListItem>
                    <ListItem>
                      <ListIcon as={BsFillArrowRightCircleFill} color='green.500' />
                      Fundamentals of JavaScript & OOP with TypeScript
                    </ListItem>
                    <ListItem>
                      <ListIcon as={BsFillArrowRightCircleFill} color='green.500' />
                      TypeScript for React (TypeScript Quizzes)
                    </ListItem>
                    <ListItem>
                      <ListIcon as={BsFillArrowRightCircleFill} color='green.500' />
                      Fundamentals of Version Control with Git.
                    </ListItem>
                  </List>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                      Quarter II (Core)
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <List spacing={3}>
                      <ListItem>
                        <ListIcon as={BsFillArrowRightCircleFill} color='green.500' />
                          Serverless Cloud Apps & APIs using Next 13 & CDK for Terraform
                      </ListItem>
                      <ListItem>
                        <ListIcon as={BsFillArrowRightCircleFill} color='green.500' />
                        Next.js 13 Web Development using Chakra UI
                      </ListItem>
                      <ListItem>
                        <ListIcon as={BsFillArrowRightCircleFill} color='green.500' />
                        UI/UX Design with Figma, Tailwind, and Chakra.
                      </ListItem>
                      {/* You can also use custom icons from react-icons */}
                      <ListItem>
                        <ListIcon as={BsFillArrowRightCircleFill} color='green.500' />
                        API Routes with Next.js, SQL and Prisma
                      </ListItem>
                      <ListItem>
                        <ListIcon as={BsFillArrowRightCircleFill} color='green.500' />
                        Multi-Cloud GraphQL Serverless API with  CDKTF
                      </ListItem>
                      <ListItem>
                        <ListIcon as={BsFillArrowRightCircleFill} color='green.500' />
                        Build Full-Stack Next.js 13 Jamstack Templates
                      </ListItem>
                    </List>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                    Quarter III (Web3 and Metaverse)
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <List spacing={3}>
                        <ListItem>
                          <ListIcon as={BsFillArrowRightCircleFill} color='green.500' />
                          Smart Contracts and Planet-Scale Web 3.0 Dapps
                        </ListItem>
                        <ListItem>
                          <ListIcon as={BsFillArrowRightCircleFill} color='green.500' />
                          Blockchain and Metaverse Theory
                        </ListItem>
                        <ListItem>
                          <ListIcon as={BsFillArrowRightCircleFill} color='green.500' />
                          Smart Contract Development in Solidity
                        </ListItem>
                        {/* You can also use custom icons from react-icons */}
                        <ListItem>
                          <ListIcon as={BsFillArrowRightCircleFill} color='green.500' />
                          Dapp Development using Ethers.js and Next.js 13 & Tokennomics
                        </ListItem>
                      </List>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                    Quarter IV Web3 and Metaverse
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                <List spacing={3}>
                        <ListItem>
                          <ListIcon as={BsFillArrowRightCircleFill} color='green.500' />
                          Developing Open Virtual and Augmented Metaverse Experiences
                        </ListItem>
                        <ListItem>
                          <ListIcon as={BsFillArrowRightCircleFill} color='green.500' />
                          Open Metaverse Web Development
                        </ListItem>
                        <ListItem>
                          <ListIcon as={BsFillArrowRightCircleFill} color='green.500' />
                          Blender 3D asset Creation for the Metaverse
                        </ListItem>
                      </List>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={
              'https://gamek.mediacdn.vn/133514250583805952/2021/11/20/untitled-16374070563331498524845.png'
            }
          />
        </Flex>
      </Stack>
      </Container>
      </Box>
    );
  }