import React, { FC, memo } from 'react';
import KettleSvg from '../svg/kettle.svg';

export interface IKettleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const KettleIcon: FC<IKettleIconProps> = memo(props => {
  return <KettleSvg {...props} />;
});
