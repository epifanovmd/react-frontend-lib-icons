import React, { FC, memo } from 'react';
import WheelchairAccessibilitySvg from '../svg/wheelchair-accessibility.svg';

export interface IWheelchairAccessibilityIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WheelchairAccessibilityIcon: FC<IWheelchairAccessibilityIconProps> = memo(props => {
  return <WheelchairAccessibilitySvg {...props} />;
});
