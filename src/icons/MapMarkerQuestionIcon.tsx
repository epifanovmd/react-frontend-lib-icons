import React, { FC, memo } from 'react';
import MapMarkerQuestionSvg from '../svg/map-marker-question.svg';

export interface IMapMarkerQuestionIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MapMarkerQuestionIcon: FC<IMapMarkerQuestionIconProps> = memo(props => {
  return <MapMarkerQuestionSvg {...props} />;
});
