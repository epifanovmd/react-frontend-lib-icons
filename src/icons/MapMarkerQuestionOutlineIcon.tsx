import React, { FC, memo } from 'react';
import MapMarkerQuestionOutlineSvg from '../svg/map-marker-question-outline.svg';

export interface IMapMarkerQuestionOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MapMarkerQuestionOutlineIcon: FC<IMapMarkerQuestionOutlineIconProps> = memo(props => {
  return <MapMarkerQuestionOutlineSvg {...props} />;
});
