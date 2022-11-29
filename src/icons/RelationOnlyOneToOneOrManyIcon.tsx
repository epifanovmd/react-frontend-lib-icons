import React, { FC, memo } from 'react';
import RelationOnlyOneToOneOrManySvg from '../svg/relation-only-one-to-one-or-many.svg';

export interface IRelationOnlyOneToOneOrManyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RelationOnlyOneToOneOrManyIcon: FC<IRelationOnlyOneToOneOrManyIconProps> = memo(props => {
  return <RelationOnlyOneToOneOrManySvg {...props} />;
});
