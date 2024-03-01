import React from "react";
import {
  FullscreenControl,
  GeolocationControl,
  Map,
  Placemark,
  RouteEditor,
  SearchControl,
  TrafficControl,
  TypeSelector,
  YMaps,
  ZoomControl,
} from "@pbe/react-yandex-maps";
import { Box } from "@chakra-ui/react";

const YandexMap = () => {
  return (
    <YMaps query={{ apikey: "ae91c39e-f779-4593-bf3f-cf83341d3684" }}>
      <Box w="100%" h="100%">
        <Map
          defaultState={{
            center: [45.042582127495294, 38.95849069735018],
            zoom: 15,
          }}
          style={{
            width: "50%",
            height: "400px",
            boxShadow: "0px 0px 7px 0px rgba(0,0,0,0.97)",
          }}
        >
          <ZoomControl options={{ size: "auto" }} />
          <TypeSelector />
          <SearchControl options={{ float: "left" }} />
          <RouteEditor options={{ float: "right" }} />
          <TrafficControl />
          <GeolocationControl options={{ float: "left" }} />
          <FullscreenControl options={{ float: "left" }} />
          <Placemark geometry={[45.042582127495294, 38.95849069735018]} />
        </Map>
      </Box>
    </YMaps>
  );
};

export default YandexMap;
