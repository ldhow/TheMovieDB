import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import FontAwesome6 from "@react-native-vector-icons/fontawesome6";
import { Colors } from "~/constants/colors";
import { styles } from "./index.style";
import { globalStyles } from "~/theme/globalStyle";

type Props = {
  options: string[];
  selected: string;
  onSelect: (value: string) => void;
  placeholder?: string;
};

const Dropdown: React.FC<Props> = ({
  options,
  selected,
  onSelect,
  placeholder,
}) => {
  const [visible, setVisible] = useState(false);

  const toggleDropdown = () => setVisible(!visible);

  const handleSelect = (option: string) => {
    onSelect(option);
    setVisible(false);
  };

  return (
    <View style={[styles.wrapper, globalStyles.boxShadow]}>
      {/* Header */}
      <TouchableOpacity style={styles.header} onPress={toggleDropdown}>
        <Text style={styles.headerText}>{placeholder || selected}</Text>
        <FontAwesome6
          name={visible ? "chevron-down" : "chevron-right"}
          size={16}
          color={Colors.black}
          iconStyle="solid"
        />
      </TouchableOpacity>

      {/* Dropdown List */}
      {visible && (
        <View style={styles.listWrapper}>
          <View>
            <FlatList
              data={options}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    styles.item,
                    selected === item && styles.selectedItem,
                  ]}
                  onPress={() => handleSelect(item)}
                >
                  <Text
                    style={[
                      styles.itemText,
                      selected === item && styles.selectedText,
                    ]}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              )}
              scrollEnabled={options.length > 5} // optional: only scroll if list is long
              nestedScrollEnabled
              contentContainerStyle={{ paddingVertical: 4 }}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default Dropdown;
