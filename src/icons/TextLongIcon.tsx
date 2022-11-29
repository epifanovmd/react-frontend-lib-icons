import React, { FC, memo } from 'react';
import TextLongSvg from '../svg/text-long.svg';

export interface ITextLongIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TextLongIcon: FC<ITextLongIconProps> = memo(props => {
  return <TextLongSvg {...props} />;
});
