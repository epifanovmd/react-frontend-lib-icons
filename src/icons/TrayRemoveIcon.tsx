import React, { FC, memo } from 'react';
import TrayRemoveSvg from '../svg/tray-remove.svg';

export interface ITrayRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TrayRemoveIcon: FC<ITrayRemoveIconProps> = memo(props => {
  return <TrayRemoveSvg {...props} />;
});
