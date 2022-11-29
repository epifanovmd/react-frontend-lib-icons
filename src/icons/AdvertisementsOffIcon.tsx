import React, { FC, memo } from 'react';
import AdvertisementsOffSvg from '../svg/advertisements-off.svg';

export interface IAdvertisementsOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AdvertisementsOffIcon: FC<IAdvertisementsOffIconProps> = memo(props => {
  return <AdvertisementsOffSvg {...props} />;
});
