import React, { FC, memo } from 'react';
import AntennaSvg from '../svg/antenna.svg';

export interface IAntennaIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AntennaIcon: FC<IAntennaIconProps> = memo(props => {
  return <AntennaSvg {...props} />;
});
