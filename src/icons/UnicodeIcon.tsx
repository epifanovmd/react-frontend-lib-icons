import React, { FC, memo } from 'react';
import UnicodeSvg from '../svg/unicode.svg';

export interface IUnicodeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const UnicodeIcon: FC<IUnicodeIconProps> = memo(props => {
  return <UnicodeSvg {...props} />;
});
