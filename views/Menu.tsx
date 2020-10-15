import React, { Fragment, useContext, useEffect } from 'react'
import FirebaseContext from '../context/firebase/firebaseContext'
import { Container, Separator, Content, List, ListItem, Thumbnail, Text, Left, Body } from 'native-base'
import globalStyles from '../styles/global'
import { StyleSheet } from 'react-native'



const Menu = () => {

    const {menu, getProducts } = useContext(FirebaseContext)

    
    useEffect(() => {
        getProducts()
        // console.log(menu);
    }, [])

    const showHeading = (category: any, i: any) => {

        if(i > 0) {
            const catBefore = menu[i-1].category

            if(catBefore !== category) {
                return(
                    <Separator style={styles.separador}>
                        <Text style={styles.separadorTexto}>{category}</Text>
                    </Separator>
                )
            }
        }  else {
            return(
                <Separator style={styles.separador}>
                    <Text style={styles.separadorTexto}>{category}</Text>
                </Separator>
            )
        }     
    }
    
    return (
        <Container style={globalStyles.contenedor}>
            <Content style={{ backgroundColor: '#FFF'}}>
                <List>
                    {menu.map((p: any, i: any) => {
                        const { id, name, image, description, category, price } = p

                        return (
                            <Fragment key={id}>
                                    {showHeading(category, i)}
                                    <ListItem>                                        
                                        <Thumbnail large square source={{uri: image}} />                                        
                                        <Body>
                                            <Text>{name}</Text>
                                            <Text note numberOfLines={2}>{description}</Text>
                                            <Text>Price €: {price}</Text>
                                        </Body>
                                    </ListItem>
                            </Fragment>
                        )
                    })}
                </List>

            </Content>
        </Container>
    )
}

const styles = StyleSheet.create({
    separador: {
        backgroundColor: '#000'
    },
    separadorTexto: {
        color: '#FFDA00',
        fontWeight: 'bold',
        textTransform: 'uppercase'

    }
})

export default Menu
