import { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import {useRouter} from 'expo-router'
import styles from './popularjobs.style'
import { COLOR, COLORS, icons, images, SIZES } from "../../../constants";
import PopularJobCard from '../../common/cards/popular/PopularJobCard'
import { isLoading } from "expo-font";
import useFetch from "../../../hook/useFetch";

const Popularjobs = () => {

  // const [data, setData] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

    const { data, isLoading, error } = useFetch("search", {
    query: "React developer",
    num_pages: "1",
    });

  return (
    <View style={styles.container}>
       <View style={styles.header}>
        <Text style={styles.headerTitle}>Popularjobs</Text>
        <TouchableOpacity style={styles.headerBtn} onPress={() => { }}>
        <Text >Show all</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size='large' color={COLORS.primary} />
        ) : error ? (
            <Text>Something went wrong</Text>
          ) : (
              <FlatList
                // data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
                data={data}
                renderItem={({ item }) => (
                  <PopularJobCard item={ item} />
                )}
                //  keyExtractor={item => item}
                keyExtractor={item => item?.job_id}
                contentContainerStyle={{ columnGap: SIZES.medium }}
                horizontal
              />
        )}        
      </View>
    </View>
    
  )
}

export default Popularjobs