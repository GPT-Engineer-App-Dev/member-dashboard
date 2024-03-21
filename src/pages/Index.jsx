import React, { useState } from "react";
import { Box, Heading, Button, Input, Stack, Avatar, Text, IconButton, Flex, useToast } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [members, setMembers] = useState([]);
  const [newMember, setNewMember] = useState("");
  const toast = useToast();

  const handleAddMember = () => {
    if (newMember.trim() !== "") {
      setMembers([...members, newMember.trim()]);
      setNewMember("");
      toast({
        title: "Member added",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const handleDeleteMember = (index) => {
    const updatedMembers = members.filter((_, i) => i !== index);
    setMembers(updatedMembers);
    toast({
      title: "Member deleted",
      status: "info",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Box maxWidth="600px" margin="auto" p={4}>
      <Heading as="h1" size="xl" textAlign="center" mb={8}>
        Admin Dashboard
      </Heading>

      <Stack spacing={4} mb={8}>
        <Flex>
          <Input placeholder="Enter member name" value={newMember} onChange={(e) => setNewMember(e.target.value)} mr={2} />
          <Button leftIcon={<FaPlus />} colorScheme="blue" onClick={handleAddMember}>
            Add Member
          </Button>
        </Flex>
      </Stack>

      <Stack spacing={4}>
        {members.map((member, index) => (
          <Flex key={index} alignItems="center" justifyContent="space-between">
            <Flex alignItems="center">
              <Avatar name={member} src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbXBsb3llZSUyMHBvcnRyYWl0fGVufDB8fHx8MTcxMTAzMzYyNnww&ixlib=rb-4.0.3&q=80&w=1080" mr={2} />
              <Text>{member}</Text>
            </Flex>
            <IconButton icon={<FaTrash />} colorScheme="red" size="sm" onClick={() => handleDeleteMember(index)} />
          </Flex>
        ))}
      </Stack>
    </Box>
  );
};

export default Index;
