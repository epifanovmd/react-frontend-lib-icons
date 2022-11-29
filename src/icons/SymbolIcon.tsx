import React, { FC, memo } from 'react';
import SymbolSvg from '../svg/symbol.svg';

export interface ISymbolIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SymbolIcon: FC<ISymbolIconProps> = memo(props => {
  return <SymbolSvg {...props} />;
});
