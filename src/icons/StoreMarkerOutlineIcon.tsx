import React, { FC, memo } from 'react';
import StoreMarkerOutlineSvg from '../svg/store-marker-outline.svg';

export interface IStoreMarkerOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StoreMarkerOutlineIcon: FC<IStoreMarkerOutlineIconProps> = memo(props => {
  return <StoreMarkerOutlineSvg {...props} />;
});
