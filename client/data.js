// json-server does not behave well with ES modules export syntax hence module.exports
module.exports = function () {
    return {
        "survey-list": [
            {
                "_id": 1,
                "dateStart": new Date('2022-11-12'),
                "dateEnd": new Date('2022-12-23'),
                "title": "Why do people love React?",
                "type": "Technology",
                "author": "Benjamin Lefebvre",
                "user": "Bengee",
                "questionsBloc": [{
                    question: 'Why...?',
                    options: ['Option 1', 'Option 2', 'Option 3'],
                },
                {
                    question: 'How...?',
                    options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
                }],
                "answerBloc": [],
                "isActive": true
            },
            {
                "_id": 2,
                "dateStart": new Date('2022-11-12'),
                "dateEnd": new Date('2022-12-23'),
                "title": "Why do people love React? 2",
                "type": "Technology",
                "author": "Benjamin Lefebvre",
                "user": "Bengee",
                "questionsBloc": [{
                    question: 'Why...?',
                    options: ['Option 1', 'Option 2', 'Option 3'],
                },
                {
                    question: 'How...?',
                    options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
                }],
                "answerBloc": [],
                "isActive": true
            }
        ]
    }
}
/*
(
    public dateStart?: Date,
    public dateEnd?: Date,
    public _id?: number,
    public title?: string,
    public type?: string,
    public author?: string,
    public user?: string,
    public questionsBloc?: {
      question?: string,
      options?: string[]
    }[],
    public answerBloc?: {
      answer?: number[];
    }[],
    public isActive?: boolean
  )

  new Survey(
      new Date('2022-11-12'),
      new Date('2022-12-23'),
      1,
      'Why do people love React',
      'Technology',
      'Benjamin Lefebvre',
      'Bengee',
      [
        {
          question: 'Why...?',
          options: ['Option 1', 'Option 2', 'Option 3'],
        },
        {
          question: 'How...?',
          options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
        },
      ],
      [],
      true
    )
*/