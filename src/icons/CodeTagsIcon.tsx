import React, { FC, memo } from 'react';
import CodeTagsSvg from '../svg/code-tags.svg';

export interface ICodeTagsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CodeTagsIcon: FC<ICodeTagsIconProps> = memo(props => {
  return <CodeTagsSvg {...props} />;
});
