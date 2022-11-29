import React, { FC, memo } from 'react';
import SymfonySvg from '../svg/symfony.svg';

export interface ISymfonyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SymfonyIcon: FC<ISymfonyIconProps> = memo(props => {
  return <SymfonySvg {...props} />;
});
