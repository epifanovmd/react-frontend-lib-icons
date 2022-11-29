import React, { FC, memo } from 'react';
import ZigbeeSvg from '../svg/zigbee.svg';

export interface IZigbeeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ZigbeeIcon: FC<IZigbeeIconProps> = memo(props => {
  return <ZigbeeSvg {...props} />;
});
