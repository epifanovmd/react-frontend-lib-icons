import React, { FC, memo } from 'react';
import StoreSettingsOutlineSvg from '../svg/store-settings-outline.svg';

export interface IStoreSettingsOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StoreSettingsOutlineIcon: FC<IStoreSettingsOutlineIconProps> = memo(props => {
  return <StoreSettingsOutlineSvg {...props} />;
});
