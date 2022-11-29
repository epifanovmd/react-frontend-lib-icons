import React, { FC, memo } from 'react';
import ContainStartSvg from '../svg/contain-start.svg';

export interface IContainStartIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ContainStartIcon: FC<IContainStartIconProps> = memo(props => {
  return <ContainStartSvg {...props} />;
});
