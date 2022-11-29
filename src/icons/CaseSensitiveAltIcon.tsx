import React, { FC, memo } from 'react';
import CaseSensitiveAltSvg from '../svg/case-sensitive-alt.svg';

export interface ICaseSensitiveAltIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CaseSensitiveAltIcon: FC<ICaseSensitiveAltIconProps> = memo(props => {
  return <CaseSensitiveAltSvg {...props} />;
});
