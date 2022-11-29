import React, { FC, memo } from 'react';
import AdvertisementsSvg from '../svg/advertisements.svg';

export interface IAdvertisementsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AdvertisementsIcon: FC<IAdvertisementsIconProps> = memo(props => {
  return <AdvertisementsSvg {...props} />;
});
