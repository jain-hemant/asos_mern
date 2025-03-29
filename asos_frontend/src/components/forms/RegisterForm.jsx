import React from 'react'
import { Grid, GridItem, Input, Portal, Select } from '@chakra-ui/react'
export default function RegisterForm() {
    return (
        <Grid>
            <GridItem>
                <label>Name</label>
                <Input type='text' name='name' placeholder='Enter Name...' />
            </GridItem>
            <GridItem>
                <label>Email</label>
                <Input type='text' name='name' placeholder='Enter Name...' />
            </GridItem>
            <GridItem>
                <label>Password</label>
                <Input type='text' name='name' placeholder='Enter Name...' />
            </GridItem>
            <GridItem>
                <label>Phone</label>
                <Input type='text' name='name' placeholder='Enter Name...' />
            </GridItem>
            <GridItem>
                <Select.Root>
                    <Select.Label>Gender</Select.Label>
                    <Select.Control>
                        <Select.Trigger>
                            <Select.ValueText placeholder="Select framework" />
                        </Select.Trigger>
                        <Select.IndicatorGroup>
                            <Select.Indicator />
                        </Select.IndicatorGroup>
                    </Select.Control>
                    {/* <Portal>
                        <Select.Positioner>
                            <Select.Content>
                                <Select.Item></Select.Item>
                                {frameworks.items.map((framework) => (
                                    <Select.Item item={framework} key={framework.value}>
                                        {framework.label}
                                        <Select.ItemIndicator />
                                    </Select.Item>
                                ))}
                            </Select.Content>
                        </Select.Positioner>
                    </Portal> */}
                    {/* <option value={"male"}>Male</option>
                    <option value={"female"}>Feale</option>
                    <option value={"other"}>Other</option> */}
                </Select.Root>
            </GridItem>
            <GridItem>
                <label>Country</label>

            </GridItem>
            <GridItem>
                <label>State</label>
                <Input type='text' name='state' value={""} placeholder='Enter Name...' />
            </GridItem>
            <GridItem>
                <label>District</label>
                <Input type='text' name='district' value={""} placeholder='Enter Name...' />
            </GridItem>
            <GridItem>
                <label>Phone</label>
                <Input type='text' name='name' value={""} placeholder='Enter Name...' />
            </GridItem>
            <GridItem>
                <label>Phone</label>
                <Input type='text' name='name' value={""} placeholder='Enter Name...' />
            </GridItem>

        </Grid>
    )
}
