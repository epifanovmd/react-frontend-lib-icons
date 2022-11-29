import React, { FC, memo } from 'react';
import TabletCellphoneSvg from '../svg/tablet-cellphone.svg';

export interface ITabletCellphoneIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TabletCellphoneIcon: FC<ITabletCellphoneIconProps> = memo(props => {
  return <TabletCellphoneSvg {...props} />;
});
